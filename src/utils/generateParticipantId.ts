export const generateParticipantId = () => {
  const randomStr = Math.floor(1000 + Math.random() * 9000).toString();
  return `AVE26-${randomStr}`;
};
