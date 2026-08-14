export const getDeviceId = (): string => {
  if (typeof window === 'undefined') return '';
  let deviceId = localStorage.getItem('deviceId') || localStorage.getItem('device_id');
  if (!deviceId) {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
      deviceId = crypto.randomUUID();
    } else {
      deviceId = 'device_' + Math.random().toString(36).substring(2, 15) + '_' + Date.now().toString(36);
    }
    localStorage.setItem('deviceId', deviceId);
    localStorage.setItem('device_id', deviceId);
  }
  return deviceId;
};
