# eyes-core

**An intuitive dashboard for real-time system performance tracking. Paired with eyes-core-api, it visualizes CPU, RAM, and storage metrics seamlessly.**

![Dashboard Screenshot](future_screen.png)

## Table of Contents
1. [Features](#features)
2. [Requirements](#requirements)
3. [Installation](#installation)
4. [Configuration](#configuration)
5. [Usage](#usage)
6. [Contribution](#contribution)
7. [License](#license)

## Features
- **Real-time Monitoring:** Get live updates on your system's performance metrics.
- **Detailed Visuals:** Easy-to-understand graphs and visual representations for CPU, RAM, and disk usage.
- **Responsive Design:** Adapts to various screen sizes, providing an optimal viewing experience on both desktop and mobile.

## Requirements
- Node.js v14 or newer
- Compatible with eyes-core-api v1.0 or newer
- A modern web browser

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/eyes-core.git
   ```

2. Navigate to the project directory:
   ```bash
   cd eyes-core
   ```
   
3. Install dependencies:

   ```bash
   npm install
   ```
4. Build the project:

   ```bash
   npm run build
   ```

## Configuration
Ensure you've set up eyes-core-api and note the API endpoint. Update the API endpoint in the configuration file located at config/default.json.

## Usage

Start the application:

   ```bash
   npm start
   ```

Open your web browser and navigate to http://localhost:3000 (or the port you've configured).

## Contribution
Contributions are always welcome! Please read the [contribution](./contribution.md) guidelines first.

## License
This project is licensed under the MIT License. See the [LICENCE](./LICENCE.MD) file for more details.

