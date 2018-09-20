import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import FacebookProvider, { Comments } from "react-facebook";
require("core-js/fn/array/find");
import 'gitment/style/default.css'
import Gitment from 'gitment'

import config from "../../../content/meta/config";

const styles = theme => ({
  postComments: {
    margin: "3em 0 0",
    padding: "3em 0 0",
    borderTop: "1px solid #ddd"
  }
});
//
// const PostComments = props => {
//   const { classes, slug, facebook } = props;

  const gitment = new Gitment({
    owner: 'creasy2010',
    repo: 'https://github.com/creasy2010/creasy2010.github.io',
    oauth: {
      client_id: '1816b072b2ee81711445',
      client_secret: '4e5dc1d0b197493c0871c14f35860f7c9d6cd317',
    },
  })
//
//
//   // gitment.render('comments')
//
//   return (
//     <div id="post-comments" className={classes.postComments}>
//       <FacebookProvider appId={facebook}>
//         <Comments
//           href={`${config.siteUrl}${slug}`}
//           width="100%"
//           colorScheme={props.theme.main.colors.fbCommentsColorscheme}
//         />
//       </FacebookProvider>
//     </div>
//   );
// };


class PostComments extends React.Component{

  componentDidMount(){
    const gitment = new Gitment({
      owner: 'creasy2010',
      repo: 'https://github.com/creasy2010/creasy2010.github.io',
      oauth: {
        client_id: '1816b072b2ee81711445',
        client_secret: '4e5dc1d0b197493c0871c14f35860f7c9d6cd317',
      },
    });
    gitment.render('post-comments');
  }

  render() {
    return (
      <div id="post-comments">

      </div>
    );
  }
}

PostComments.propTypes = {
  classes: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
  facebook: PropTypes.object.isRequired
};

export default injectSheet(styles)(PostComments);
