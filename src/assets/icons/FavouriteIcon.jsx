// import "./favStyle.sass"
const FavouriteIcon = ({width=30, height=30, color="#000000", fill=false}, props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="heart-icon"
    viewBox="0 0 24 24"
    width={width}
    height={height}
    color={"#000000"}
    fill={fill ? "orange" : "none"}
    {...props}
  >
    <path
      d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z"
      stroke={fill ? "#FF9800": "#000"}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
  // <svg  width={30} height={30} color={"#FF0000"}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" /></svg>
);

export default FavouriteIcon
