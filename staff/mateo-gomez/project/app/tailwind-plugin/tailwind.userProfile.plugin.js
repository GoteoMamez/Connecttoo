// tailwind.config.js
const plugin = require('tailwindcss/plugin')

export default plugin(({ addComponents }) => {
    addComponents({
        '.UserProfile': {
            marginTop: '10vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: 'auto',
            marginBottom: '8vh',
        },
        '.profileContainer': {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'column',
        },
        '.profileImageContainer': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            // marginLeft: '50%',
            width: '100%',
            justifyContent: 'center',
            gridArea: '1 / 1 / 2 / 2',
        },
        '.ProfileInfo': {
            display: 'grid',
            gridTemplateColumns: '99vw 1vw',
            gridTemplateRows: 'fit-content',
            /*flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            margin: '0 auto',*/
        },
        '.ImageGalleryContainer': {
            display: 'grid !important',
            gridTemplateColumns: 'repeat(3, 1fr) !important',
            gap: '10px',
        },
        '.GalleryImages': {
            width: '100%',
            height: '18vh',
            objectFit: 'cover',
        },
        '.profileImage': {
            width: '13vh !important',
            height: '13vh !important',
            zIndex: '100000',
            display: 'flex',
            justifyContent: 'center',
            borderRadius: '50%',
            border: '0.5vh solid white',
            objectFit: 'cover',
        },
        '.UserNameTitle': {
            color: 'white',
            fontFamily: '"Langar", system-ui',
            fontSize: '3vh',
        },
        '.UserDescription': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            width: '89%',
            display: 'flex',
            textAlign: 'left',
            fontFamily: '"Langar", system-ui',
            color: 'white',
            fontSize: '1.5vh',
            padding: '1vh',
            borderRadius: '2vh',
        },
        '.SocialLinksContainer': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',

            height: 'auto',
            gridArea: '1 / 2 / 2 / 3',
            paddingTop: '1.7rem'
        },
        '.fa-brands': {
            color: 'white',
            height: '5vh',
            width: '5vh',
            fontSize: 'x-large',
        },
        '.EditProfileButton': {
            marginTop: '2vh',
            marginRight: '0',
            width: '11vh',
        },
        '.ProfileDescription': {
            display: 'flex',
            justifyContent: 'center',
        },
    })
})