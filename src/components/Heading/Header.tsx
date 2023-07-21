import './Header.css';

interface Props {
    type: string;
    text: string;
}

const Header: React.FC<Props> = (props) => {
    const { type, text } = props;

    return <p className={`heading-${type}`}>{text}</p>;
};

export default Header;
