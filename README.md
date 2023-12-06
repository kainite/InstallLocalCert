# Install Local Cert with mkcert for Windows
**Warning**:Install Localhost Cert on Windows and website, mkcert is a simple tool for making locally-trusted development certificates. It requires no configuration.

## Run Powershell
**Warning**:Check if Policies restrictions:
```
PS C:\cert> Get-ExecutionPolicy
```
## Install Choco Package to install Mkcert
```
PS C:\cert> Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```
## Install Choco output
**Warning**:Forcing web requests to allow TLS v1.2 (Required for requests to Chocolatey.org)
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
**Warning**:Created a new local CA 💥
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
**Warning**:Note: the local CA is not installed in the system trust store.
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

