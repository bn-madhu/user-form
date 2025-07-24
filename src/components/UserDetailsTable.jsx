import React from 'react';
import { useProfileContext } from '../context/ProfileContext';

const UserDetailsTable = () => {
  const { profiles } = useProfileContext();
  return (
    <table className='profile-table'>
      <thead>
        <tr>
          <th>Full Name</th>
          <th>Email</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Bio</th>
        </tr>
      </thead>
      <tbody>
        {profiles.map((profile, index) => (
          <tr key={index}>
            <td>{profile.fullName}</td>
            <td>{profile.email}</td>
            <td>{profile.age}</td>
            <td>{profile.gender}</td>
            <td>{profile.bio}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default UserDetailsTable
