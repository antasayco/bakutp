export const conf = {
    vars:{
        PORT: process.env.PORT || 4040,
        DATABASE_URL: process.env.DATABASE_URL || `mongodb://localhost/samsung`,
        SECRET: process.env.SECRET
    }
};

