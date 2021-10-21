const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        window.scrollY > 300 ? setIsVisible(true) : setIsVisible(false);
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 100,
            behavior: 'smooth',
        });
    };
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);


    .more-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    color: $primary;
    position: relative;
    border-radius: 3px;
    border: 1px solid $accent;
    width: 175px;
    padding: 13px 23px;
    background: linear-gradient(to right, $secondary 50%, $accent 50%);
    background-size: 210% 100%;
    background-position: right bottom;
    transition: all 0.3s ease-in-out;
    font-size: 16px;
    font-weight: 400;
    &:active {
        transform: scale(0.99);
    }
    &:hover {
        background-position: left bottom;
        color: $accent;
        cursor: pointer;
        border: 1px solid $accent;
        .more-btn-arrow {
            transform: translateY(1px);
            transition: transform 0.01s ease-in;
        }
    }
    &-text {
        padding-right: 7px;
    }
}