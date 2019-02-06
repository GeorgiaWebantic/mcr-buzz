import React from 'react';
import LikeButton from './LikeButton';
import '../styles/feed.scss';
import moment from 'moment';
import { FacebookShareButton, FacebookIcon, WhatsappShareButton, WhatsappIcon } from 'react-share';
import Linkify from 'react-linkify';

const shareUrl = 'https://trello.com/b/jSqMO2qF/mcr-blog';
const title = 'MCR Buzz';

const Feed = (props) => {
  return (
    <div className="Feed" >
      <h2 className="category">{props.category}</h2>
      <h3 className="title">{props.title}</h3>
      <p id="info">posted {props.date}</p>
      <img src={props.image} alt="where's the image" width="100%" />
      <p>{props.description}</p>
      <p id="info">by {props.user.firstName} {props.user.lastName}</p>
      <LikeButton id={props.id} liked={props.likes}/>
      <p id="info">posted { moment(props.datePosted).format('MMMM Do YYYY, h:mm a') }</p>
      {
        props.image && (
          <img src={props.image} alt="where's the image" width="100%" />
        )
      }
      {
        !props.image && (
          null
        )
      }
      <p><Linkify>{props.description}</Linkify></p>
      <p id="info">by {props.user}</p>
      <FacebookShareButton
            url={shareUrl}
            quote={title}
            className="Demo__facebook__share-button">
            <FacebookIcon
              size={32}
              round />
        </FacebookShareButton>
        <WhatsappShareButton
            url={shareUrl}
            quote={title}
            className="Demo__whatsapp__share-button">
            <WhatsappIcon
              size={32}
              round />
        </WhatsappShareButton>
    </div>
  );
};
export default Feed;
