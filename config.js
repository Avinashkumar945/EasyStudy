// Configuration for EasyStudy Platform
// This file allows easy switching between development and production environments

const config = {
    // Set to 'development' for local testing or 'production' for live deployment
    environment: 'production', // Change this to 'development' for local testing

    development: {
        API_BASE_URL: 'http://localhost:3000',
        SOCKET_URL: 'http://localhost:3000'
    },

    production: {
        API_BASE_URL: 'https://easystudy-66e7.onrender.com',
        SOCKET_URL: 'https://easystudy-66e7.onrender.com'
    }
};

// Get current environment configuration
const currentConfig = config[config.environment];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = currentConfig;
} else {
    // For browser environment
    window.APP_CONFIG = currentConfig;
}