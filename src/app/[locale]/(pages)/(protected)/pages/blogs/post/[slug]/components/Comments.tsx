import { useTranslations } from 'next-intl';
import { Col, Container, Row } from 'react-bootstrap';
import { Fragment } from 'react';
import Image from 'next/image';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { CommentType } from '../data';

interface CommentsProps {
  comments: CommentType[];
}

export default function Comments({ comments }: CommentsProps) {
  const t = useTranslations('blogs.post');

  return (
    <section className="position-relative pb-5">
      <Container>
        <Row>
          <Col lg={12}>
            <div>
              <h4 className="mb-3">
                {t('commentsTitle', { defaultMessage: 'Comments' })}
                <span className="badge badge-soft-secondary fs-14 align-middle ms-2">{comments.length}</span>
              </h4>
              {comments.map((comment, idx) => (
                <Fragment key={idx}>
                  <div className="d-flex align-items-top mt-4">
                    <Image className="me-2 rounded-sm" src={comment.avatar} alt="avatar" height={36} />
                    <div className="flex-grow-1">
                      <h6 className="m-0">{comment.name}</h6>
                      <p className="text-muted mb-0">
                        <small>{comment.createdAt}</small>
                      </p>
                      <p className="my-1">{comment.description}</p>
                      <div>
                        <span role="button" className="btn btn-sm btn-link text-primary fw-medium p-0">
                          <IconifyIcon className="icon-xxs me-1" icon="lucide:message-circle" />
                          {t('reply', { defaultMessage: 'Reply' })}
                        </span>
                      </div>
                      {comment.reply &&
                        comment.reply.map((reply, replyIdx) => (
                          <div className="d-flex align-items-top mt-4" key={replyIdx}>
                            <Image className="me-2 rounded-sm" src={reply.avatar} alt="avatar" height={36} />
                            <div className="flex-grow-1">
                              <h6 className="m-0">{reply.name}</h6>
                              <p className="text-muted mb-0">
                                <small>{reply.createdAt}</small>
                              </p>
                              <p className="my-1">{reply.description}</p>
                              <div>
                                <span role="button" className="btn btn-sm btn-link text-primary fw-medium p-0">
                                  <IconifyIcon className="icon-xxs me-1" icon="lucide:message-circle" />
                                  {t('reply', { defaultMessage: 'Reply' })}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                  {comments.length - 1 !== idx && <hr className="my-4" />}
                </Fragment>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
