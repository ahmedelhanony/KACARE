export const DefaultConfirmationOptions = (options?: any) => {
  return {
    title: options?.title || 'Congratulations!',
    message: options?.message || 'Your application has been submitted',
    confirmText: options?.confirmText || '',
    moreText: '' || options?.moreText,
    type: 'done' || options?.type,
    icon: 'done' || options?.icon,
  };
};

export const DefaultDeletionOptions = (options?: any) => {
  return {
    title: options?.title || 'Delete Match!',
    message: options?.message || 'Are you sure you want to delete?',
    confirmText: '' || options?.confirmText,
    moreText: '' || options?.moreText,
    type: 'delete' || options?.type,
    icon: 'delete-match' || options?.icon,
  };
};

export const DefaultErrorOptions = (options?: any) => {
  return {
    title: options?.title || 'OOPS!',
    message: options?.message || 'Something went wrong.',
    type: 'done',
    icon: 'delete-match',
  };
};
