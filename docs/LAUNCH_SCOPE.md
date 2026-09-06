# MECS Launch Scope Document

## Business Identity
- **Primary Name**: MECS
- **Full Name**: ME Computer Services
- **Tagline**: Practical IT help. Clear fixed prices.
- **Business Structure**: Independent, one-person IT support business.
- **Customer Interaction**: Customers deal directly with an experienced engineer.
- **Capacity Constraint**: The business must avoid taking on more concurrent work than one person can deliver.

## Business Description
MECS provides independent IT support from one experienced engineer, with direct communication from enquiry to completion.

## Launch Positioning
- Fixed-price remote technical support for home users, sole traders and small businesses.
- Remote-first.
- Maximum two active customer jobs at one time.
- No emergency, out-of-hours, 24/7, or guaranteed-response service.
- Work is by appointment and subject to a suitability check.
- Local visits may be considered case-by-case when remote work is impossible.
- Do not advertise fixed Monday-Friday 9 AM-5 PM availability.
- Do not publish a geographic service area yet.

## Scope and Time Boundaries
- Every package has a fixed booked time allowance.
- The time includes initial discussion, investigation, agreed safe actions, and the written summary.
- Work stops when the allowance expires.
- Additional investigation or remedial work requires a separate quotation and customer approval.
- Replace vague uses of “basic” with bounded checks wherever practical.
- Do not promise that every fault will be identified or repaired.

## Credentials and Remote Access
- Never instruct customers to email, message, or disclose passwords to MECS.
- Customers should enter passwords themselves during an attended session or create a temporary restricted account.
- Temporary accounts/access should be removed when the work is complete.
- Remote-access software must require customer approval.
- Do not record or retain credentials.

## Permission and Risk Controls
Before any system-changing action, require written customer approval.
Require confirmation that important data is backed up where the proposed work could affect data or availability.
Distinguish clearly between:
- read-only inspection;
- low-risk agreed changes;
- disruptive or destructive work that is excluded.
Do not make an absolute legal claim that MECS can never be liable. This document is operational scope, not final legal advice.

## Proposed Launch Packages

### 1. Windows or Linux Computer Health Check
- Primarily read-only.
- SMART status means reading existing health data, not running a long or destructive disk test.
- Do not include a full memory test within the one-hour remote package.
- Promise findings and recommendations, not improved performance.

**Intended Customer**: Home users, sole traders, small businesses with a single computer needing a checkup.  
**Typical Problems Covered**: Slow performance, software updates status, antivirus check, basic hardware health (disk, memory), common error logs.  
**Defined Customer Outcome**: A report detailing the current health of the computer, recommendations for improvements, and a fixed price for any agreed follow-up work.  
**What is Included**:
- Remote connection to the computer (with customer permission via attended session; customer enters any required credentials).
- Check of operating system version and update status.
- Antivirus/anti-malware status check.
- Disk health check (SMART status, free space) – read-only.
- Memory (RAM) test for errors – limited to a quick, non‑destructive check if available and safe; otherwise omitted.
- Review of startup programs and services.
- Basic event log review for critical errors (read-only, limited to recent/system logs).
- A written report with findings and recommendations.
**What is Excluded**:
- Any repair or fix work.
- Data backup or recovery.
- Hardware replacement or upgrade.
- In‑depth software troubleshooting.
- Network or connectivity issues beyond the local machine.
- Operating system reinstallation.
- Running destructive disk tests, extended memory tests, or stress tests.
**Number of Devices Included**: 1 computer (desktop or laptop).  
**Recommended Time Allowance**: 1 hour.  
**Information or Access Required from the Customer**:
- Remote access permission (customer must attend and grant control; MECS does not request or retain passwords).
- Details of any specific concerns.
**Conditions that May Prevent Completion**:
- Computer cannot be powered on or booted to the operating system.
- Lack of internet connection for remote access.
- Customer unwilling to provide necessary access or attend the session.
**How Additional Work Should Be Handled**: Any work outside the health check (e.g., virus removal, performance tuning) will be quoted separately after the health check.  
**Can be Delivered Remotely**: Yes.  
**Risks Requiring Explicit Customer Acknowledgement**:
- The health check is diagnostic only and does not guarantee the identification of all issues.
- Some hardware tests (like stress tests) may not be performed to avoid risk to an unstable system.
- The customer acknowledges that they are responsible for backing up critical data before any work begins.

### 2. Linux Cleanup and Troubleshooting
- Separate diagnosis from changes.
- Cleanup, package updates, service restarts, firewall changes, and deletion of files require explicit approval.
- Do not delete logs, customer data, unknown files, or application data.
- Define cleanup conservatively: agreed package‑cache and clearly identified temporary‑file cleanup only.
- Do not promise a cleaner or better‑performing system.
- Do not request that the customer disclose a root or sudo password.

**Intended Customer**: Home users, sole traders, small businesses using Linux desktops or servers experiencing issues.  
**Typical Problems Covered**: Slow performance, high resource usage, service failures, log errors, basic security checks.  
**Defined Customer Outcome**: A report on actions taken with customer approval, findings, and recommendations for ongoing maintenance.  
**What is Included**:
- Remote connection to the Linux system (with customer permission via attended session; customer enters any required credentials).
- Check of system logs (journalctl, /var/log) for errors – read‑only, limited to recent entries.
- Review of running processes and resource usage (CPU, memory, disk I/O).
- Check of disk usage and cleanup of temporary files – limited to agreed package‑cache and clearly identified temporary files only.
- Review of essential services and their status.
- Basic security check (firewall status, open ports, user accounts) – read‑only.
- Update of package manager repositories (if agreed and safe) – requires explicit approval.
- Application of non‑critical updates (if agreed and safe) – requires explicit approval.
- A summary of actions taken (with timestamps) and recommendations.
**What is Excluded**:
- Distribution version upgrades.
- Hardware diagnosis or replacement.
- Data recovery or backup.
- Complex service configuration (e.g., setting up a web server from scratch).
- Security breach investigation or malware removal (beyond basic checks).
- Proprietary driver installation or troubleshooting.
- Deletion of logs, customer data, unknown files, or application data.
- Running destructive disk tests or extended memory tests.
**Number of Devices Included**: 1 Linux system (desktop or server).  
**Recommended Time Allowance**: 1.5 hours.  
**Information or Access Required from the Customer**:
- Remote access permission (customer must attend and grant control; MECS does not request or retain passwords; customer may create a temporary restricted account if desired).
- Details of any specific issues or goals.
**Conditions that May Prevent Completion**:
- System is not bootable or accessible via SSH/remote tool.
- Lack of network connectivity.
- Customer unwilling to provide necessary access or attend the session.
- System is in a state where running commands could cause further issues (e.g., severely corrupted filesystem).
**How Additional Work Should Be Handled**: Any work outside the cleanup and troubleshooting scope (e.g., data recovery, major configuration changes, security incident response) will be quoted separately.  
**Can be Delivered Remotely**: Yes.  
**Risks Requiring Explicit Customer Acknowledgement**:
- Performing updates or making changes carries a risk of breaking the system, especially if it is already unstable.
- The customer acknowledges that they are responsible for backing up critical data before any work begins.
- The engineer is not liable for any data loss or system instability resulting from the work, unless due to negligence.

### 3. Docker Problem Diagnosis
- Do not print, copy, store, or include secrets, tokens, passwords, private keys, or full environment‑variable values in reports.
- Container restarts, recreation, image removal, volume changes, pruning, and Compose changes are excluded unless separately scoped and approved.
- Default package is diagnosis only, apart from an explicitly approved trivial reversible change.
- Never expose or grant Hermes/MECS unrestricted Docker socket access outside the agreed customer session.

**Intended Customer**: Developers, small businesses, or individuals running Docker containers who are experiencing issues with containers, images, or the Docker daemon.  
**Typical Problems Covered**: Containers failing to start, image build failures, network issues between containers, volume mount problems, performance issues, Docker daemon errors.  
**Defined Customer Outcome**: A diagnosis of the Docker‑related problem, steps to reproduce, and a recommended solution or workaround.  
**What is Included**:
- Remote connection to the host system running Docker (with customer permission via attended session; customer enters any required credentials).
- Review of Docker daemon logs (journalctl or /var/log/docker.log) – read‑only, limited to recent entries.
- Listing of containers, images, networks, and volumes.
- Inspection of specific problematic containers (logs, environment, mounts) – excluding exposure of secrets.
- Attempt to reproduce the issue in a controlled manner.
- Check of Docker configuration and version.
- Review of resource usage (CPU, memory, disk I/O) by Docker and containers.
- Basic network configuration check (bridges, iptables, DNS resolution within containers).
- A written diagnosis and recommended next steps.
**What is Excluded**:
- Fixing the problem (unless it is a trivial configuration change agreed upon).
- Writing or debugging application code inside containers.
- Setting up complex CI/CD pipelines.
- Data recovery from container volumes.
- Switching to or from other container runtimes (e.g., podman).
- Production environment optimization or scaling advice.
- Container restarts, recreation, image removal, volume changes, pruning, and Compose changes (unless separately scoped and approved).
- Exposure of secrets, tokens, passwords, private keys, or full environment‑variable values in reports.
**Number of Devices Included**: 1 host system running Docker.  
**Recommended Time Allowance**: 1 hour.  
**Information or Access Required from the Customer**:
- Remote access permission (customer must attend and grant control; MECS does not request or retain passwords; customer may create a temporary restricted account if desired).
- Details of the specific problem, including steps to reproduce if known.
- Access to relevant Dockerfiles, compose files, or application code (if needed for diagnosis) – ensuring no secrets are exposed.
**Conditions that May Prevent Completion**:
- Docker daemon is not running or the host is inaccessible.
- Lack of necessary permissions to inspect Docker objects.
- The problem is intermittent and cannot be reproduced during the session.
- The issue requires access to proprietary code or data that the customer cannot share.
**How Additional Work Should Be Handled**: Any work to implement fixes, rebuild images, or modify configurations beyond diagnosis will be quoted separately.  
**Can be Delivered Remotely**: Yes.  
**Risks Requiring Explicit Customer Acknowledgement**:
- Diagnostic commands may alter the state of containers (e.g., restarting them) which could cause temporary service disruption.
- The customer acknowledges that they are responsible for backing up any critical data in container volumes.
- The engineer is not liable for any data loss or service disruption resulting from diagnostic actions, unless due to negligence.

### 4. NAS, Storage and Backup Health Review
- Make the default review read‑only.
- Remove test restoration from the base package; offer it only as separately scoped work.
- Do not run filesystem repair, RAID rebuild, scrub, disk replacement, firmware updates, or storage‑pool changes.
- Limit the package to one NAS/storage system and review of up to four installed disks.
- If degraded storage or evidence of disk failure is discovered, stop risky testing and report it.
- Promise a health/configuration review, not certification that backups or disks are reliable.

**Intended Customer**: Home users, sole traders, small businesses using NAS devices, external storage, or backup solutions who want to verify the health and configuration of their storage.  
**Typical Problems Covered**: Disk health, RAID status, backup job failures, storage capacity, network connectivity to storage, basic security settings.  
**Defined Customer Outcome**: A report on the health of the storage system, backup configuration, and recommendations for improving data safety.  
**What is Included**:
- Remote connection to the NAS/storage device or a computer connected to it (with customer permission via attended session; customer enters any required credentials).
- Check of storage system logs (if accessible) – read‑only, limited to recent entries.
- Review of disk health (SMART status for each disk) – read‑only.
- Review of RAID or storage pool status and consistency – read‑only.
- Check of filesystem errors (if accessible and safe to run) – limited to non‑destructive checks.
- Review of shared folders, permissions, and access controls.
- Check of backup job configuration and last‑run status.
- Verification of backup destination accessibility and space.
- Network connectivity check to the storage device.
- Basic security check (firmware version, default passwords, open ports, firewall settings) – read‑only.
- A written report with findings and recommendations.
**What is Excluded**:
- Physical hardware repair or disk replacement.
- Data recovery from failed disks.
- Reconfiguration of RAID or storage pools.
- Setting up complex backup schedules or retention policies.
- Migration of data to a new storage system.
- Performance benchmarking or optimization.
- Secure data erasure or disposal.
- Running filesystem repair, RAID rebuild, scrub, disk replacement, firmware updates, or storage‑pool changes.
- Test restoration from a backup (offered only as separately scoped work).
**Number of Devices Included**: 1 NAS device or storage system (including its disks). For USB/external drives, up to 4 drives can be checked in one session.  
**Recommended Time Allowance**: 1.5 hours.  
**Information or Access Required from the Customer**:
- Remote access permission to the NAS admin interface (or to a connected computer) – customer must attend and grant control; MECS does not request or retain passwords; customer may create a temporary restricted account if desired.
- Administrator password for the NAS/storage device – customer enters it themselves during the attended session.
- Details of any specific concerns (e.g., which backup job is failing).
- Information about the backup configuration and what data is considered critical.
**Conditions that May Prevent Completion**:
- NAS device is not powered on or not accessible on the network.
- Lack of necessary permissions to access admin interface or disks.
- The storage system is in a degraded state where running checks could cause further damage (e.g., failing disk in RAID 0).
- Customer unwilling to provide credentials or attend the session.
**How Additional Work Should Be Handled**: Any work to replace disks, reconfigure storage, recover data, or modify backup systems beyond the health review will be quoted separately.  
**Can be Delivered Remotely**: Yes (if the NAS/admin interface is accessible remotely; otherwise, local visit by prior arrangement).  
**Risks Requiring Explicit Customer Acknowledgement**:
- Running storage checks (like SMART tests or filesystem checks) on a failing disk could potentially worsen its condition or lead to data loss.
- The customer acknowledges that they are responsible for having an independent backup of critical data before any work begins.
- The engineer is not liable for any data loss resulting from the health review, unless due to negligence.

### 5. Hardware and Performance Diagnosis
- Remove bootable‑memory testing, bad‑sector scans, and extended stress tests from the base remote package.
- Restrict it to operating‑system‑visible diagnostics, existing SMART information, sensor readings, logs, and a short low‑risk performance check when appropriate.
- No shipping of customer devices at launch.
- Physical inspection or component installation must be separately scoped.
- Promise likely causes and recommended next steps, not a definitive hardware diagnosis.

**Intended Customer**: Home users, sole traders, small businesses experiencing slow performance, crashes, or hardware‑related issues on a computer (Windows or Linux).  
**Typical Problems Covered**: Slow boot/application launch, frequent crashes or blue screens, overheating, unusual noises, perceived slowness, failure to power on reliably.  
**Defined Customer Outcome**: A diagnosis of the likely hardware cause(s) of the problem, recommendations for testing or replacement, and a fixed price for any agreed follow‑up work (e.g., component installation).  
**What is Included**:
- Remote connection to the computer (with customer permission via attended session; customer enters any required credentials) for software‑based checks.
- Review of system logs for hardware errors (Windows: Event Viewer, Linux: dmesg, journalctl) – read‑only.
- Check of CPU and temperature readings (if sensors available).
- Memory (RAM) test for errors – limited to a quick, non‑destructive check if available and safe; otherwise omitted.
- Disk health check (SMART status, scan for bad sectors if agreed and safe) – limited to non‑destructive short scan.
- Review of device manager (Windows) or lspci/lsusb (Linux) for missing drivers or errors.
- Basic performance benchmark (CPU, memory, disk speed) if agreed and safe.
- Review of power settings and battery health (for laptops).
- A written report with findings and recommendations for hardware testing or replacement.
**What is Excluded**:
- Physical disassembly of the computer.
- Hardware repair or component replacement.
- Data backup or recovery.
- Operating system reinstallation.
- In‑depth stress testing that could risk system stability.
- Diagnosis of intermittent issues that require prolonged monitoring.
- Running destructive disk tests, extended memory tests, or bootable‑memory tests.
- Shipping of customer devices.
**Number of Devices Included**: 1 computer (desktop or laptop).  
**Recommended Time Allowance**: 1 hour.  
**Information or Access Required from the Customer**:
- Remote access permission (with ability to run diagnostic tools; customer must attend and grant control; MECS does not request or retain passwords).
- Administrator password (if required for diagnostics or to change boot order for memory tests) – customer enters it themselves during the attended session.
- Details of the specific symptoms and when they occur.
- If physical tests are needed, the customer must make the computer available for a local visit or agree to ship it (shipping costs not included) – but physical inspection or component installation is separately scoped.
**Conditions that May Prevent Completion**:
- Computer cannot be powered on or booted sufficiently to run diagnostic software.
- Lack of necessary permissions to run diagnostic tools.
- The problem is purely physical (e.g., broken screen) and requires disassembly.
- Customer unwilling to provide access or make the computer available.
**How Additional Work Should Be Handled**: Any work to replace hardware components, perform data recovery, or reinstall the operating system will be quoted separately.  
**Can be Delivered Remotely**: The diagnosis phase can be done remotely if the computer can boot and run software; physical tests require local access.  
**Risks Requiring Explicit Customer Acknowledgement**:
- Running memory or disk tests can, in rare cases, cause data loss or system instability on already failing hardware.
- The customer acknowledges that they are responsible for backing up critical data before any diagnostic work begins.
- The engineer is not liable for any data loss or further hardware damage resulting from diagnostic actions, unless due to negligence.

### 6. Home or Small-Office Network Diagnosis
- The remote base package is diagnosis‑first.
- Do not change WAN, LAN, DHCP, DNS, Wi‑Fi, firewall, or port‑forwarding settings during the base package unless the customer explicitly approves a small reversible change.
- Warn that router changes can disconnect the remote session.
- Do not promise diagnosis of ISP infrastructure.
- If there is no working remote connection, the enquiry may be considered separately for a local visit.
- Do not request that customers disclose router passwords.

**Intended Customer**: Home users, sole traders, small businesses experiencing issues with their home or small office network (internet connectivity, Wi‑Fi coverage, device connectivity).  
**Typical Problems Covered**: No internet access, intermittent connectivity, slow Wi‑Fi speeds, devices unable to connect, router configuration issues, basic network security.  
**Defined Customer Outcome**: A diagnosis of the likely network issue(s), recommendations for improving connectivity or security, and a fixed price for any agreed follow‑up work (e.g., router reconfiguration).  
**What is Included**:
- Remote connection to a computer on the network (with customer permission via attended session; customer enters any required credentials) for tests.
- Check of the public IP address and internet connectivity from the router.
- Review of router status lights and basic info (if accessible via web interface or app).
- Test of connectivity to the router (ping, DNS resolution).
- Wi‑Fi scan for channel overlap and signal strength (if a wireless device is available).
- Check of IP address assignment (DHCP) and DNS settings on a test device.
- Review of basic router settings (if accessible): WAN/LAN configuration, Wi‑Fi SSID and password, DHCP range, port forwarding.
- Basic security check: default password check, firmware version, open ports on router (if possible).
- A written report with findings and recommendations for improving the network.
**What is Excluded**:
- Physical repair or replacement of networking hardware (router, modem, switches, cables).
- Running new network cables or rewiring.
- Configuration of advanced features (VPN, VLANs, complex QoS).
- Diagnosis of ISP‑side problems (requires ISP involvement).
- In‑depth security audit or penetration testing.
- Setting up guest networks or captive portals.
- Changing WAN, LAN, DHCP, DNS, Wi‑Fi, firewall, or port‑forwarding settings during the base package unless the customer explicitly approves a small reversible change.
**Number of Devices Included**: 1 home or small office network (including the router/modem and connected devices). Diagnostics are performed from one test device.  
**Recommended Time Allowance**: 1 hour.  
**Information or Access Required from the Customer**:
- Remote access permission to a computer on the network (or local visit by prior arrangement).
- Administrator password for the router/web interface (if available and needed for checks) – customer enters it themselves during the attended session.
- Details of the specific symptoms and when they occur.
- If local visit is needed, the customer must make the networking equipment accessible.
**Conditions that May Prevent Completion**:
- Complete lack of internet connectivity preventing remote access to any device.
- Router/modem is not powered on or not accessible.
- Customer unwilling to provide router credentials or make equipment available.
- The problem is isolated to a specific device's wireless adapter or NIC (may require device‑specific troubleshooting).
**How Additional Work Should Be Handled**: Any work to replace hardware, run new cables, or reconfigure the network beyond basic advice will be quoted separately.  
**Can be Delivered Remotely**: Yes, if at least one device on the network is accessible remotely; otherwise, local visit by prior arrangement.  
**Risks Requiring Explicit Customer Acknowledgement**:
- Changing router settings (even with permission) can temporarily disrupt internet connectivity for all devices on the network.
- The customer acknowledges that they are responsible for knowing their ISP credentials and having a backup plan if internet is lost during the session.
- The engineer is not liable for any loss of internet connectivity or disruption to network services resulting from the diagnosis, unless due to negligence.

## Capability Inventory
MECS has proven experience in the following areas, which supports the launch packages but does not guarantee expertise in every sub‑domain:
- Operating Systems: Windows 10/11, Windows Server, Ubuntu LTS, RHEL, CentOS, Debian
- Virtualization: VMware ESXi, Workstation, Fusion, Hyper-V, VirtualBox
- Containers: Docker, Docker Compose, basic Kubernetes concepts
- Storage: NAS (Synology, QNAP, Western Digital), SAN concepts, RAID levels, iSCSI, NFS, SMB
- Cloud: Basic AWS EC2, S3, IAM; Azure VMs, Storage; Google Cloud Compute Engine
- Networking: TCP/IP, DNS, DHCP, NAT, basic routing, Wi‑Fi (802.11a/b/g/n/ac/ax)
- Security: Firewalls (iptables, ufw, Windows Firewall), antivirus/anti‑malware, basic encryption
- Backup: rsync, borg, restic, Veeam Agent, Windows Backup, macOS Time Machine
- Hardware: PC building, component installation, peripheral troubleshooting
- Management: SCCM basics, Intune device enrollment, Group Policy

## Services Supported by MECS Experience but Deliberately Excluded from the Fixed‑Price Launch Catalogue
These services are within MECS's capability but are excluded from the initial fixed‑price offer due to their complexity, variability, or need for custom scoping:
- Complex VMware migrations (datacenter to datacenter, version upgrades)
- Cloud migrations (lift‑and‑shift, re‑architecture)
- SCCM deployments (design, implementation, ongoing management)
- Managed services (ongoing monitoring, patch management, helpdesk)
- Data recovery from physically damaged media
- Penetration testing or vulnerability assessments
- Custom software development or scripting
- Enterprise backup solution design and implementation
- High‑availability clustering or load balancing
- Wireless site surveys or enterprise Wi‑Fi design
- VoIP phone system setup or troubleshooting
- Printer or peripheral fleet management
- Office 365 or Google Workspace migration and configuration
- Domain controller setup or Active Directory design
- Email server setup or troubleshooting (Exchange, Postfix, etc.)
- Firewall appliance configuration (pfSense, Cisco ASA, etc.)
- Secure web application deployment (HTTPS, certificates, WAF)

## Enquiry Triage Checklist
Before accepting any work, MECS must answer the following questions to determine suitability and scope:
1. Is the request within the scope of the defined launch packages or closely related exclusions?
2. Can the work be delivered remotely, or does it require a local visit (and is the customer willing to arrange/ pay for it)?
3. Does the customer have realistic expectations about what fixed‑price remote support can achieve?
4. Is the customer able to provide the necessary access (remote credentials, physical access to equipment)?
5. Does the customer understand that they are responsible for backing up critical data before any work begins?
6. Is the customer dealing directly with the engineer (no third‑party intermediaries complicating communication)?
7. Can the work be completed within the engineer's weekly availability limit (max two active jobs)?
8. Is the customer aware that there are no emergency or 24/7 support guarantees?
9. Has the customer acknowledged the risks associated with diagnostic work (as outlined in each package)?
10. Is the request for a one‑time fixed‑price service, or does it imply ongoing management (which would be out of scope for launch)?

## Capacity and Scheduling Rules
- Maximum of two active customer jobs at any time.
- Jobs are considered active from the point of accepted scope until the customer confirms work is complete or the engagement is terminated.
- New enquiries are scheduled only when active job count falls below two.
- Standard working hours: Monday to Friday, 9:00 AM to 5:00 PM (local time) – *not advertised as fixed availability*.
- Local visits are scheduled only during standard hours and require at least 48 hours notice.
- Remote sessions are scheduled in 1‑hour blocks; longer sessions require explicit agreement.
- The engineer reserves the right to decline or reschedule work due to illness, unforeseen circumstances, or exceeding capacity.
- Customers will be notified of any schedule changes as soon as possible.

## Suggested Language Explaining MECS Nature
> "MECS provides independent IT support from one experienced engineer, with direct communication from enquiry to completion."

## Questions That Must Be Answered Before Prices Can Be Set
Prices for the launch packages cannot be determined without the following information from the customer:
1. **Exact Scope**: Which specific package(s) is the customer interested in, and are there any variations from the standard description?
2. **Access Method**: Will the work be delivered remotely (requiring internet access and remote access credentials), or does it require a local visit (and if so, what is the location)?
3. **Urgency and Timing**: Does the customer have a preferred timeline, and does it align with the engineer's availability?
4. **Number of Systems**: For packages that cover multiple devices (e.g., NAS with multiple drives), what is the exact count?
5. **Specific Concerns**: Are there any particular symptoms, error messages, or goals that the customer wants addressed?
6. **Environment Details**:
   - For computer health checks: Operating system version and specifications.
   - For Linux cleanup: Distribution and version.
   - For Docker diagnosis: Host OS and Docker version.
   - For NAS/storage review: Make and model of the device.
   - For hardware diagnosis: Computer make/model or symptoms.
   - For network diagnosis: Router make/model and ISP type.
7. **Data Backup Status**: Confirmation that the customer has backed up critical data or acknowledges the risk of proceeding without a recent backup.
8. **Risk Acknowledgement**: Has the customer read and acknowledged the specific risks associated with the chosen package?
9. **Follow‑up Expectations**: Does the customer expect any work beyond the fixed‑price package, and if so, what is the anticipated scope?
10. **Payment Method**: How does the customer intend to pay (bank transfer, PayPal, credit card via invoice, etc.)?

*Note: Once the above information is provided, MECS will provide a fixed‑price quote for the agreed scope of work. Prices are not published as they depend on the specific context and requirements of each engagement.*