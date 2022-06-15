export const Note = (props) => {
    const { title, body } = props;
    return (
        <li>
          <p>{title}</p>
          <small>{body}</small>
        </li>
    );
  };