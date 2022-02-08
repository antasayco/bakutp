export default async () => {
    try {
      const {
        PORT,
        DATABASE_URL,
        SECRET,
        DB_NAME,
        MAILGUN_DOMAIN,
        MAILGUN_API_KEY,
        CLOUDINARY_CLOUD_NAME,
        CLOUDINARY_API_KEY,
        CLOUDINARY_API_SECRET,
      } = process.env;
      if (!PORT) {
        const portNotExistError = new Error();
        portNotExistError.message = 'PORT is required';
        throw portNotExistError;
      }
      if (!DATABASE_URL) {
        const dbUrlNotExistsError = new Error();
        dbUrlNotExistsError.message = 'DATABASE_URL is required';
        throw dbUrlNotExistsError;
      }
      if (!SECRET) {
        const secretNotExistsError = new Error();
        secretNotExistsError.message = 'SECRET is required';
        throw secretNotExistsError;
      }
      if (!DB_NAME) {
        const dbNameNotExistsError = new Error();
        dbNameNotExistsError.message = 'DB_NAME is required';
        throw dbNameNotExistsError;
      }
      if (!MAILGUN_DOMAIN) {
        const mgDomainNotExistsError = new Error();
        mgDomainNotExistsError.message = 'MAILGUN_DOMAIN is required';
        throw mgDomainNotExistsError;
      }
      if (!MAILGUN_API_KEY) {
        const mgApiKeyNotExistsError = new Error();
        mgApiKeyNotExistsError.message = 'MAILGUN_API_KEY is required';
        throw mgApiKeyNotExistsError;
      }
      if (!CLOUDINARY_CLOUD_NAME) {
        const cCloudNameNotExistsError = new Error();
        cCloudNameNotExistsError.message = 'CLOUDINARY_CLOUD_NAME is required';
        throw cCloudNameNotExistsError;
      }
      if (!CLOUDINARY_API_KEY) {
        const cApiKeyNotExistsError = new Error();
        cApiKeyNotExistsError.message = 'CLOUDINARY_API_KEY is required';
        throw cApiKeyNotExistsError;
      }
      if (!CLOUDINARY_API_SECRET) {
        const cApisecretNotExistsError = new Error();
        cApisecretNotExistsError.message = 'CLOUDINARY_API_SECRET is required';
        throw cApisecretNotExistsError;
      }
      console.log('All vars loaded');
      return Promise.resolve()
    } catch (e) {
      throw e;
    }
}
  