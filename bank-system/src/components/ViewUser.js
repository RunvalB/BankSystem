import {React, useEffect,useState}from 'react'
import Navbar from './Navbar'
import AccountServices from './../services/AccountServices'

export default function ViewUser(props) {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          setLoading(true);
          try {
            const response = await AccountServices.getAllUsers();
            console.log(response.data[0].accounts);
            setUsers(response.data[0].accounts);
          } catch (error) {
            console.log(error);
          }
          setLoading(false);
        };
        fetchData();
      }, []);
  return (
    <>
    <Navbar userData ={props.userData}></Navbar>
    <div className="container user-container">
    <table class="table table-hover ">
          <thead className="table-dark">
            <tr>
              <th scope="col">Account Number</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">Saving Balance</th>
              <th scope="col">Fixed Deposit </th>
            </tr>
            <tbody></tbody>
          </thead>
          {!loading && (
            <tbody>
              {users.map((user) => (
                <tr>
                    <td>{user.accountNumber}</td>
                    <td>{user.user.name}</td>
                    <td>{user.user.email}</td>
                    <td>{user.user.address}</td>
                    <td>&#x20B9; {user.balance}</td>
                    <td>
                    {
                  user.fdAmount === 0 ?
                     "Not Opened"  : 
                   <>&#x20B9; {user.fdAmount} </>
                  }      
                    </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
        </div>
    </>
  )
}

