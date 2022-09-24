
const CourseImg = ({src, alt}) => {
    return (
        <img src={src} alt={alt} style={{
            maxWidth: 300,
            maxHeight: 200,
            objectFit: 'cover',
            objectPosition: 'center',
            margin: '5px'

        }}/>
    );
}


export default CourseImg;