import { Box, Typography, Grid } from '@mui/material';
import Image from 'next/image';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import LocalPoliceOutlinedIcon from '@mui/icons-material/LocalPoliceOutlined';
import ImageWithSpinner from '../image/ImageWithSpinner';
import './meetTheTeam.scss'; 

const teamMembers = [
  {
    name: 'Dr. Amer Hussien',
    title: 'Chief Medical Officer',
    image: '/images/amer.png',
    description: 'Dr. Amer has over 20 years of experience in telemedicine, ensuring that our services are safe, reliable, and cutting-edge.',
    university:'University of Pennsylvania',
    src:'/images/pen.png',
    alt:'penselvania university'
  },
  {
    name: 'Mina Smith',
    title: 'Lead Pharmacist',
    image: '/images/mina.png',
    description: 'Mina oversees our online pharmacy operations, ensuring that all medications are delivered safely and promptly.',
    university:'American Board of Obesity Medicine',
    src:'/images/standford-vp.png',
    alt:'Obesity Medicine'
    
  },
  {
    name: 'Karim Masry',
    title: 'Head of Patient Services',
    image: '/images/amer.png',
    description: 'Karim ensures that our patients receive the highest level of care, guiding them through every step of their telehealth journey.',
    university:"Yale Medical Group's Board of Directors",
    src:'/images/american-board.png',
    alt:'Yale M'
    
  },
];

const MeetTheTeam = () => {

  return (
    <Box className="meet-the-team">
      <Grid container>
        {/* Left Side Content */}
        <Grid item xs={12} md={5} className="team-content">
           <Typography variant="h1" component="h1" className="section-title">
            Led by Passionate Founders and a Skilled Team
          </Typography>
          <Typography variant="h5" component="h5" className="team-description">
            Joey med is driven by a dedicated team of founders and medical professionals who are committed to providing high-quality healthcare services. Our team’s clinical expertise and innovative approach help deliver effective treatment plans and exceptional care for every patient, ensuring their health goals are met with the utmost attention and care.
          </Typography>

          <ul className="team-highlights">
            <li><CheckCircleOutlineIcon className="highlight-icon" /> <strong>Board-certified:</strong> &nbsp; 20+ years experience in specialty medicine</li>
            <li><ScienceOutlinedIcon className="highlight-icon" /> <strong>Industry:</strong> &nbsp; 100s of published studies in top medical journals</li>
            <li><LocalPoliceOutlinedIcon className="highlight-icon" /> <strong>Policy leaders:</strong> &nbsp; Former Surgeon General and Head of the DEA</li>
            <li><ScienceOutlinedIcon className="highlight-icon" /> <strong>Innovation:</strong> &nbsp; Cutting-edge telehealth technology</li>
            <li><CheckCircleOutlineIcon className="highlight-icon" /> <strong>Comprehensive Care:</strong> &nbsp; Integrated pharmacy and medical services</li>
            <li><LocalPoliceOutlinedIcon className="highlight-icon" /> <strong>Global Experts:</strong> &nbsp; Experts from leading medical institutions worldwide</li>
          </ul>

      
        </Grid>

        {/* Right Side Team Members with Scroller */}
        <Grid item xs={12} md={7} className="team-slider">
       
          <Box className="scroll-container" >
            <Grid container spacing={4} className="scroll-wrapper">
              {teamMembers.map((member, index) => (
                <Grid item key={index} className="team-member-wrapper">
                  <Box className="team-member">
                    <Box className="avatar">
                      <ImageWithSpinner src={member.image} alt={member.name} />
                    </Box>
                    <Typography variant="h5" component="h5" className="member-name">{member.name}</Typography>
                    <Typography variant="h6" component="h6"  className="member-title">{member.title}</Typography>
                    <Typography variant="body2" component="body2"   className="member-description">{member.description}</Typography>
                    <br/>
                    <Box className="uni"> 
                      <Image 
                        src={member.src} 
                        alt={member.alt} 
                        width={20} 
                        height={20} 
                        quality={100}
                        loading="lazy" 
                      />
                      <Typography variant="body2" component="body2" >{member.university}</Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
         
        </Grid>
      </Grid>
    </Box>
  );
};

export default MeetTheTeam;
