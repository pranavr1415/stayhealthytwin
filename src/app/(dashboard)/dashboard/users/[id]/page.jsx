const UserDetails = async ({ params}) => {
    const { id } = await params;
  return (
    <div>
        <h1>Showing user details for User {id}</h1>
    </div>
  )
}

export default UserDetails