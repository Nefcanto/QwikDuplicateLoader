import {
    CourseSlider,
} from 'Shared'

const List = ({ courses }) => {

    return <>
        <div className="relative max-w-7xl mx-auto px-3 xl:px-0">

            <div className="text-3xl mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei
            </div>
            <div className="text-paydar-color22">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorpert.
            </div>

            <CourseSlider courses={courses} />

        </div>
    </>
}

export default List
