// env vars
module.exports = (req, res) => {
    res.json({
        GCDeploymentId: process.env.GC_DEPLOYMENT_ID,
        GCRegion: process.env.GC_REGION,
        GCEnvironment: process.env.GC_ENVIRONMENT,
        GCDDI: process.env.GC_DDI
    });
};
