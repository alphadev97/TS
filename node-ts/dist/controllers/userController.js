export const getUser = (req, res, next) => {
    const users = ["A", "B", "C", "D", "Lol"];
    res.json({ users });
};
