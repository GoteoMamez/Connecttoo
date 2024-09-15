import Text from "../../../../components/core/Text"
import Image from "../../../../components/core/Image"
import Button from "../../../../components/core/Button"
import ConfirmDelete from "./ConfirmDelete"
import ProfileLink from "../../../../components/core/ProfileLink"
import { useState } from "react"
import { useNavigate } from 'react-router-dom'

import logic from "../../../logic"


import './Post.css'

function HostPost({ post, onHostPostDeleted, onViewProfileClick }) {
    console.log('Post -> render')
    console.log(post)

    const [showConfirmDelete, setShowConfirmDelete] = useState(false)
    const navigate = useNavigate()

    const handleDeletePost = () => setShowConfirmDelete(true)

    const cancelDeletePost = () => setShowConfirmDelete(false)

    const confirmDeletePost = () => {
        try {
            logic.deleteHostPost(post.id)
                .then(() => onHostPostDeleted())
                .catch((error) => {
                    console.error(error)

                    alert(error.message)

                    return
                })

        } catch (error) {
            console.error(error)

            alert(error.message)
        }
        onHostPostDeleted()
        setShowConfirmDelete(false)
    }

    const handleViewProfile = (authorId) => {
        console.log('Author ID:', authorId)
        navigate(`/users/${authorId}/profile`)
    }



    return <article className="Post">


        <Text className='AuthorTitle'>
            <ProfileLink onClick={() => handleViewProfile(post.author.id)}>{post.author.username}</ProfileLink>
        </Text>

        <Image className='PostImage' src={post.image}></Image>

        <div className="CityAgePost">
            <Text className='PostCity'><b>City: </b>&nbsp;{post.city}</Text>
            <Text className='PostAge'><b>Age: </b>&nbsp;{post.age}</Text>
        </div>

        <Text className='PostOffer'><b>Offer:</b>&nbsp;{post.offer}</Text>
        <Text className='PostDescription'><b>Description:</b>&nbsp;{post.description}</Text>

        {post.author.id === logic.getUserId() && <Button className='DeletePostButton' onClick={handleDeletePost}>Delete</Button>}

        {showConfirmDelete && (
            <ConfirmDelete
                onConfirmDeletePost={confirmDeletePost}
                onCancelDeletePost={cancelDeletePost}
            />

        )}
    </article>
}

export default HostPost