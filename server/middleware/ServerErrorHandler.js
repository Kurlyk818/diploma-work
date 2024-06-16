

const serverErrorHandler = (res, err) => {
    console.error(err);
    return res.status(500).json({ message: err.message });
};

module.exports = serverErrorHandler;