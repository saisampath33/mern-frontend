export default function Register() {
return (
<div>
    <h2>Register Page</h2>
    <br />
    <form>
    <label htmlFor="FirstName">FirstName:</label>
    <input type="text" id="FirstName" name="FirstName" required />
    <br/><br />
    <label htmlFor="LastName">LastName:</label>
    <input type="text" id="LastName" name="LastName" required />
    <br /><br />
    <label htmlFor="email">Email:</label>
    <input type="email" id="email" name="email" required />
    <br /><br />
    <label htmlFor="password">Password:</label>
    <input type="password" id="password" name="password" required />
    <br /><br />
    <button type="submit">Register</button>
    </form>
</div>
);
}