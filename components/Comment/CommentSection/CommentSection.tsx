import React, { useMemo } from 'react';
import { useCommentService } from 'services/CommentService/CommentService';
import styled from 'styled-components';
import { CommentBox } from '../CommentBox/CommentBox';
import { Comment } from 'services/CommentService/types';

const CommentSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  * + * {
    flex: 1 1 auto;
  }
`;

const CommentGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SubcommentContainer = styled.div`
  padding-left: 3rem;
`;

type CommentSectionProps = {
  id: string;
};

type CommentGroup = {
  entityComment: Comment;
  subComments: Comment[];
};

/**
 * Groups comments with their respective subcomments/responses
 */
const groupComments = (allComments: Comment[]): CommentGroup[] => {
  // all the comments made directly under the post/recipe
  const entityComments = allComments.filter(
    (comment) => comment.commentId === undefined
  );
  // comments made on other comments
  const subComments = allComments.filter(
    (comment) => comment.entityId !== undefined
  );

  // group subcomments with their respective comments to apply different styling to them
  return entityComments.map((comment) => ({
    entityComment: comment,
    subComments: subComments.filter(
      (subComment) => subComment.commentId === comment.id
    ),
  }));
};

export const CommentSection: React.FunctionComponent<CommentSectionProps> = ({
  id,
}) => {
  const { getComments } = useCommentService();

  const Comments = useMemo(() => {
    const allComments = getComments(id);
    console.log(allComments);
    return groupComments(allComments).map((group, index) => (
      <CommentGroupContainer key={`comment-group-${index}`}>
        <CommentBox comment={group.entityComment} />
        {group.subComments.map((subComment, index) => (
          <SubcommentContainer key={`subcomment-${index}`}>
            <CommentBox comment={subComment} />
          </SubcommentContainer>
        ))}
      </CommentGroupContainer>
    ));
  }, [getComments, id]);

  return <CommentSectionContainer>{Comments}</CommentSectionContainer>;
};
