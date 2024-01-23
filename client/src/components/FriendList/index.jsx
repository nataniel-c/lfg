const FriendList = () => {
    return (
        <section className="bg-info">
            <h2>Friends:</h2>
            {/* <ul className="list-group">
                {User.map((user) => (
                    <li className="list-group-item" key={user.login.uuid}>
                        {`${user.login.username} (${user.login.console})`}
                    </li>
                ))}
            </ul> */}
        </section>
    );
}

export default FriendList;