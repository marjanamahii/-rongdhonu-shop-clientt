import React from 'react';
import useUsers from '../../../../hooks/useUsers';
import User from '../User/User';

const Users = () => {
    const { users, spinner } = useUsers();
    return (
        <div>
            {
                spinner && <div className="d-flex justify-content-center">
                    <div className="spinner-grow text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            }
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">User ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                    </tr>
                </thead>

                <tbody>

                    {
                        users.map(user => <User
                            key={user._id}
                            user={user}
                        ></User>)
                    }

                </tbody>
            </table>

        </div>
    );
};

export default Users;