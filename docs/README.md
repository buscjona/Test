Prerequisites
1. Node.js
2. M365 developer account with sideloading permission enabled.
https://developer.microsoft.com/en-us/microsoft-365/dev-program

Running the application
1. Executing the command teamsfx provision --env local in your project directory.
2. Executing the command teamsfx deploy --env local in your project directory.
3. Executing the command teamsfx preview --env local --m365-host teams

(!) Warning: If you changed the manifest file, please run 'teamsfx provision --env local' to install app again.
(!) Warning: WARN: Closing browser will not terminate the preview process, please press Ctrl+C to terminate.

Running the web server
1. Starting just the web server on local port with npm start
2. In case node_modules folder is empty/doesn't exist running command npm install


Upon distribution the .localConfigs file will look like this:

# A gitignored place holder file for local runtime configurations
BROWSER=none
HTTPS=true
PORT=
SSL_CRT_FILE=
SSL_KEY_FILE=


Upon distribution the .env.local file will look likes this:

# This file includes environment variables that can be committed to git. It's gitignored by default because it represents your local development environment.

# Built-in environment variables
TEAMSFX_ENV=local

# Generated during provision, you can also add your own variables.
TAB_DOMAIN=
TAB_ENDPOINT=
TEAMS_APP_ID=
TEAMS_APP_PACKAGE_PATH=

# Generated during deploy, you can also add your own variables.
SSL_CRT_FILE=
SSL_KEY_FILE=




Project structure:

- .vscode
  - launch.json: Configuration for launching/debugging the project in VS Code.
  - settings.json: VS Code workspace settings.
  - tasks.json: Custom tasks configuration for building/testing the project.
- appPackage: Contains files related to the Teams app package.
  - color.png: Color icon for the Teams app.
  - manifest.json: Manifest file defining the Teams app's configuration and capabilities.
  - outline.png: Outline icon for the Teams app.
- config: Configuration files for the project.
  - webpack.config.js: Webpack configuration file for bundling the project's assets.
- docs: Documentation folder.
  - README.md: Documentation file for the project.
- env: Environment configuration files.
  - .env.dev: Environment variables specific to the "dev" environment.
  - .env.local: Environment variables specific to the "local" environment.
  - .env.local.user: User-specific environment variables for the "local" environment.
- infra: Infrastructure configuration files.
  - azure.bicep: Azure Bicep file for defining the project's infrastructure.
  - azure.parameters.json: Parameters file for the Azure Bicep deployment.
- node_modules: Folder containing project dependencies installed via npm.
- public: Publicly accessible files and assets.
  - dashboard-dark.png: Dark-themed image for the dashboard.
  - dashboard-hc.png: High-contrast image for the dashboard.
  - dashboard.png: Default image for the dashboard.
  - favicon.io: Favicon for the web application.
  - index.html: HTML template file for the web application.
  - style.css: CSS file for styling the web application.
- src: Source code folder.
  - components: Reusable React components.
    - dashboards: Folder for dashboard components.
      - SampleDashboard.jsx: Sample dashboard component.
    - internal: Internal utility components.
      - addneeScopes.js: Utility function for adding additional scopes.
      - context.jsx: Context provider component.
      - login.js: Utility function for login functionality.
      - singletonContext.js: Singleton context object.
    - services: Service components.
      - chartService.js: Service for handling chart data.
      - listService.js: Service for handling list data.
    - styles: CSS stylesheets for components.
      - ChartWidget.css: Styles for the chart widget.
      - ListWidget.css: Styles for the list widget.
    - widgets: Folder for widget components.
  - App.css: CSS file for styling the main App component.
  - App.jsx: Main component of the application.
  - index.css: CSS file for styling the index.html file.
  - index.jsx: Entry point of the application.
  - Privacy.jsx: Privacy component for displaying privacy information.
  - TabConfig.jsx: Tab configuration component.
  - TermsOfUse.jsy: Terms of Use component for displaying terms of use information.
- test: Folder for test files.
- .gitignore: File specifying which files and folders should be ignored by Git.
- .localConfigs: Placeholder file for local runtime configurations.
- package-lock.json: Auto-generated file specifying the exact versions of installed dependencies.
- package.json: Project configuration and dependencies file.
- teamsapp.local.yml: Teams Toolkit configuration file for local development.
- teamsapp.yml: Teams Toolkit configuration file.
