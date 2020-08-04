const users = [
    {
        email: 'test@gmail.com',
        password: 'test@gmail.com',
        token:'abc'
    },
    {
        email: 'test1@gmail.com',
        password: 'test1@gmail.com',
        token:'cba'
    }
];

export const isValidUser = ({ email, password }) => {
    const user = users.find(item => item.email === email);

    if (!user)
        return null;

    if (user.password === password)
        return user;

    return null;

}