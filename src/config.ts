export const conf = {
    vars:{
        PORT: process.env.PORT || 4040,
        DATABASE_URL: process.env.DATABASE_URL || `mongodb+srv://edusync:tasayco123@edusync-cluster.8v5ev.mongodb.net/`,
        SECRET: process.env.SECRET || "tasayco"
    }
};

