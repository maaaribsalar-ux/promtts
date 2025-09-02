'use client';
import { useTranslations } from 'next-intl';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// components
import TextAreaFormInput from '@/components/form/TextAreaFormInput';
import TextFormInput from '@/components/form/TextFormInput';

interface AddCommentProps {
  postId: string;
}

interface CommentFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function AddComment({ postId }: AddCommentProps) {
  const t = useTranslations('blogs.post');

  const schemaResolver = yupResolver(
    yup.object().shape({
      name: yup.string().required(t('form.nameRequired', { defaultMessage: 'Please enter Name' })),
      email: yup
        .string()
        .required(t('form.emailRequired', { defaultMessage: 'Please enter Email' }))
        .email(t('form.emailInvalid', { defaultMessage: 'Please enter valid Email' })),
      subject: yup.string().required(t('form.subjectRequired', { defaultMessage: 'Please enter Subject' })),
      message: yup.string().required(t('form.messageRequired', { defaultMessage: 'Please enter Message' })),
    }),
  );

  const { control, handleSubmit } = useForm<CommentFormData>({ defaultValues: {}, resolver: schemaResolver });

  const onSubmit = (data: CommentFormData) => {
    console.log('Comment submitted:', { postId, ...data });
    // Add API call or state update logic here
  };

  return (
    <Card className="border">
      <Card.Body>
        <h4 className="mb-3 mt-0">{t('postComment', { defaultMessage: 'Post a comment' })}</h4>
        <form onSubmit={handleSubmit(onSubmit)} className="account-form">
          <input type="hidden" name="postId" value={postId} />
          <Row>
            <Col md={6}>
              <TextFormInput
                type="text"
                placeholder={t('form.namePlaceholder', { defaultMessage: 'Name' })}
                name="name"
                containerClassName="mb-3"
                control={control}
              />
            </Col>
            <Col md={6}>
              <TextFormInput
                type="email"
                placeholder={t('form.emailPlaceholder', { defaultMessage: 'Email' })}
                name="email"
                containerClassName="mb-3"
                control={control}
              />
            </Col>
            <Col md={12}>
              <TextFormInput
                type="text"
                placeholder={t('form.subjectPlaceholder', { defaultMessage: 'Subject' })}
                name="subject"
                containerClassName="mb-3"
                control={control}
              />
            </Col>
            <Col md={12}>
              <TextAreaFormInput
                type="textarea"
                rows={3}
                placeholder={t('form.messagePlaceholder', { defaultMessage: 'Message' })}
                name="message"
                containerClassName="mb-3"
                control={control}
              />
              <Button type="submit" variant="secondary">
                {t('form.submit', { defaultMessage: 'Submit' })}
              </Button>
            </Col>
          </Row>
        </form>
      </Card.Body>
    </Card>
  );
}
