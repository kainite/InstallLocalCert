# Install Local Cert with mkcert for Windows
**NOTE**:Install Localhost Cert on Windows and website, mkcert is a simple tool for making locally-trusted development certificates. It requires no configuration.

## Run Powershell
**NOTE**:Check if Policies restrictions:
```
PS C:\cert> Get-ExecutionPolicy
```
## Install Choco Package to install Mkcert
```
PS C:\cert> Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```
## Install Choco output
**OutPut**:Forcing web requests to allow TLS v1.2 (Required for requests to Chocolatey.org)
Getting latest version of the Chocolatey package for download.
Not using proxy.
Getting Chocolatey from https://community.chocolatey.org/api/v2/package/chocolatey/2.2.2.
Downloading https://community.chocolatey.org/api/v2/package/chocolatey/2.2.2 to C:\Users\xxxx\AppData\Local\Temp\chocolatey\chocoInstall\chocolatey.zip
Not using proxy.
Extracting C:\Users\xxxx\AppData\Local\Temp\chocolatey\chocoInstall\chocolatey.zip to C:\Users\xxxx\AppData\Local\Temp\chocolatey\chocoInstall
Installing Chocolatey on the local machine
Creating ChocolateyInstall as an environment variable (targeting 'Machine')
  Setting ChocolateyInstall to 'C:\ProgramData\chocolatey'
WARNING: It's very likely you will need to close and reopen your shell
  before you can use choco.
Restricting write permissions to Administrators
We are setting up the Chocolatey package repository.
The packages themselves go to 'C:\ProgramData\chocolatey\lib'
  (i.e. C:\ProgramData\chocolatey\lib\yourPackageName).
A shim file for the command line goes to 'C:\ProgramData\chocolatey\bin'
  and points to an executable in 'C:\ProgramData\chocolatey\lib\yourPackageName'.
Creating Chocolatey folders if they do not already exist.
chocolatey.nupkg file not installed in lib.
 Attempting to locate it from bootstrapper.
PATH environment variable does not have C:\ProgramData\chocolatey\bin in it. Adding...
WARNING: Not setting tab completion: Profile file does not exist at 'C:\Users\HugoSilva\OneDrive - Alternus Energy
Office365\Documents\WindowsPowerShell\Microsoft.PowerShell_profile.ps1'.
Chocolatey (choco.exe) is now ready.
You can call choco from anywhere, command line or powershell by typing choco.
Run choco /? for a list of functions.
You may need to shut down and restart powershell and/or consoles
 first prior to using choco.
Ensuring Chocolatey commands are on the path
Ensuring chocolatey.nupkg is in the lib folder
## Install MKCERT
```
PS C:\cert> choco install mkcert
```
## Install MKCERt output
**OutPut**:Created a new local CA 💥
Note: the local CA is not installed in the system trust store.
Run "mkcert -install" for certificates to be trusted automatically ⚠️
Created a new certificate valid for the following names 📜
 - "install"
The certificate is at "./install.pem" and the key at "./install-key.pem" ✅
It will expire on 6 March 2026 🗓

## Create Cert
```
PS C:\cert> mkcert hscert.com "*.hscert.com" hscert.test localhost 127.0.0.1 ::1
```
## Creation Cert Output
**OutPut**:Note: the local CA is not installed in the system trust store.
Run "mkcert -install" for certificates to be trusted automatically ⚠️
Created a new certificate valid for the following names 📜
 - "hscert.com"
 - "*.hscert.com"
 - "hscert.test"
 - "localhost"
 - "127.0.0.1"
 - "::1"
Reminder: X.509 wildcards only go one level deep, so this won't match a.b.hscert.com ℹ️
The certificate is at "./hscert.com+5.pem" and the key at "./hscert.com+5-key.pem" ✅
It will expire on 6 March 2026 🗓

## Install Cert on Machine
```
PS C:\cert> mkcert -install
```
## Install Cert Output
**Warning**: The local CA is now installed in the system trust store! ⚡️

## Install NODEJS
```
PS C:\cert> winget install nodejs
```
**Output**: The `msstore` source requires that you view the following agreements before using.
Terms of Transaction: https://aka.ms/microsoft-store-terms-of-transaction
The source requires the current machine's 2-letter geographic region to be sent to the backend service to function properly (ex. "US").

Do you agree to all the source agreements terms?
[Y] Yes  [N] No: Y
Found Node.js [OpenJS.NodeJS] Version 21.3.0
This application is licensed to you by its owner.
Microsoft is not responsible for, nor does it grant any licenses to, third-party packages.
Downloading https://nodejs.org/dist/v21.3.0/node-v21.3.0-x64.msi
  ██████████████████████████████  25.8 MB / 25.8 MB
Successfully verified installer hash
Starting package install...
Successfully installed

## Install NODEJS using Choco
```
PS C:\cert> choco install nodejs
```
**Output**: Chocolatey v2.2.2
Installing the following packages:
nodejs
By installing, you accept licenses for the packages.
Progress: Downloading nodejs.install 21.4.0... 100%
nodejs.install v21.4.0
nodejs.install package files install completed. Performing other installation steps.
The package nodejs.install wants to run 'chocolateyInstall.ps1'.
Note: If you don't run this script, the installation will fail.
Note: To confirm automatically next time, use '-y' or consider:
choco feature enable -n allowGlobalConfirmation
Do you want to run the script?([Y]es/[A]ll - yes to all/[N]o/[P]rint): A
Installing 64 bit version
Installing nodejs.install...
nodejs.install has been installed.
nodejs.install may be able to be automatically uninstalled.
 The install of nodejs.install was successful.
  Software installed as 'msi', install location is likely default.
Progress: Downloading nodejs 21.4.0... 100%
nodejs v21.4.0 [Approved]
nodejs package files install completed. Performing other installation steps.
 The install of nodejs was successful.
  Software installed to 'C:\ProgramData\chocolatey\lib\nodejs'
Chocolatey installed 2/2 packages.
 See the log for details (C:\ProgramData\chocolatey\logs\chocolatey.log).

## Install NodeJS Express
``` 
PS C:\cert> npm install express
```
added 62 packages, and audited 64 packages in 3s

11 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

## Create index.js
```
const fs = require('fs')
const key = fs.readFileSync('./ca/hscert.com+5-key.pem')
const cert = fs.readFileSync('./ca/hscert.com+5.pem')

const express = require('express')
const app = express()

app.get('/', (req, res, next) => {
  res.status(200).send('Welcome to Cert Page!')
})

const https = require('https')
const server = https.createServer({ key, cert }, app)

const port = 3000
server.listen(port, () => {
  console.log(`Server is listening on https://localhost:${port}`)
})
```
## Run Node Server
```
PS C:\cert> node index.js
```
Server is listening on https://localhost:3000

