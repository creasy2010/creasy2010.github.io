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

const PostComments = props => {
  const { classes, slug, facebook } = props;

  const gitment = new Gitment({
    id: 'Your page ID', // optional
    owner: 'Your GitHub ID',
    repo: 'The repo to store comments',
    oauth: {
      client_id: 'Your client ID',
      client_secret: 'Your client secret',
    },
    // ...
    // For more available options, check out the documentation below
  })


  // gitment.render('comments')


  return (
    <div id="post-comments" className={classes.postComments}>
      <FacebookProvider appId={facebook}>
        <Comments
          href={`${config.siteUrl}${slug}`}
          width="100%"
          colorScheme={props.theme.main.colors.fbCommentsColorscheme}
        />
      </FacebookProvider>
    </div>
  );
};

PostComments.propTypes = {
  classes: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
  facebook: PropTypes.object.isRequired
};

export default injectSheet(styles)(PostComments);
