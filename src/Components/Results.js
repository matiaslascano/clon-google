import { Link } from '@mui/material'
import './Results.css'


const Results = ({data : {title, link, displayLink, snippet}}) => {
  return (
    <div className='result'>
        <p>
            <Link href={link}>{displayLink}</Link>
        </p>
        <Link href={link}><h3>{title}</h3></Link>
        <p>
            {snippet}
        </p>
    </div>
  )
}

export default Results