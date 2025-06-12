import dayjs from 'dayjs';

const DATE_FORMAT = 'MMMM D';
const CLASS_FORMAT = 'YYYY-MM-DD';

function humanizeCommentDate(commentDate: Date) {
  return commentDate ? dayjs(commentDate).format(DATE_FORMAT) : '';
}

function classNameCommentDate(commentDate: Date) {
  return commentDate ? dayjs(commentDate).format(CLASS_FORMAT) : '';
}

export { humanizeCommentDate, classNameCommentDate };
