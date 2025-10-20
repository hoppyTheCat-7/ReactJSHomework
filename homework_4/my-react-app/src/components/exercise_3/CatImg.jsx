function CatImg({ urlProp }) {
    return <img src={urlProp} alt="A cat" style={{ width: "400px", height: "400px", borderRadius: "50%", objectFit: "cover"}} />
}

export default CatImg