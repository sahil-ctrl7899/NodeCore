// Import the OS module (built into Node.js)
const os = require("os");

// 🖥️ System Info

console.log("OS Platform:", os.platform()); // OS platform (e.g., 'linux', 'win32', 'darwin') :contentReference[oaicite:1]{index=1}

console.log("OS Type:", os.type()); // OS name (e.g., 'Linux', 'Windows_NT', 'Darwin') :contentReference[oaicite:2]{index=2}

console.log("OS Release:", os.release()); // OS release/version string :contentReference[oaicite:3]{index=3}

console.log("CPU Arch:", os.arch()); // CPU architecture string (e.g., 'x64', 'arm') :contentReference[oaicite:4]{index=4}

console.log("Hostname:", os.hostname()); // Hostname of the machine :contentReference[oaicite:5]{index=5}

console.log("System Uptime (seconds):", os.uptime()); // How many seconds the system has been running :contentReference[oaicite:6]{index=6}

console.log("Load Average (1,5,15 min):", os.loadavg()); // Load average array (mainly useful on Unix) :contentReference[oaicite:7]{index=7}

console.log("User Info:", os.userInfo()); // Info about the current user (username, homedir, etc.) :contentReference[oaicite:8]{index=8}

// 🧠 Memory and CPU

console.log("Total Memory (bytes):", os.totalmem()); // Total system memory (bytes) :contentReference[oaicite:9]{index=9}

console.log("Free Memory (bytes):", os.freemem()); // Free memory (bytes) :contentReference[oaicite:10]{index=10}

console.log("CPU Info:", os.cpus()); // Array of CPU/core info objects :contentReference[oaicite:11]{index=11}

console.log("CPU Endianness:", os.endianness()); // CPU byte order ('BE' or 'LE') :contentReference[oaicite:12]{index=12}

// 📁 OS Paths & Constants

console.log("Temporary Directory:", os.tmpdir()); // Default temp folder path :contentReference[oaicite:13]{index=13}

console.log("Home Directory:", os.homedir()); // Home directory of the current user :contentReference[oaicite:14]{index=14}

console.log("End-of-Line Marker:", JSON.stringify(os.EOL)); // EOL constant string ('\\n' or '\\r\\n') :contentReference[oaicite:15]{index=15}

console.log("OS Constants:", os.constants); // OS system constants object (errors, signals, etc.) :contentReference[oaicite:16]{index=16}

