module.exports = ({ env }) => ({
    upload: {
        config: {
            provider: 'cloudinary',
            providerOptions: {
                cloud_name: env('CLOUDINARY_NAME'),
                api_key: env('CLOUDINARY_KEY'),
                api_secret: env('CLOUDINARY_SECRET'),
            },
            actionOptions: {
                upload: {},
                uploadStream: {},
                delete: {},
            },
        },
    },
    "strapi-google-auth": {
        enabled: true,
    },
    'users-permissions': {
        config: {
            jwt: {
                expiresIn: '7d',
            },
            register: {
                allowedFields: ["nickname"],
            },
        },
    },
});
