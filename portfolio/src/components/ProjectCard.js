export const ProjectCard = (props) => {
    return(
    <table>
        <tbody>
            <tr>
                <h2>{props.title}</h2>
            </tr>
            <tr>
                <td>
                    <img style={imgStyle} src="logo192.png"></img>
                </td>
                <td>
                    <p>This project was really fun cause I got to use React</p>
                </td>
            </tr>
        </tbody>
    </table>
    );
}

const imgStyle = {
    "height": "50px",
    "width": "50px"
}
