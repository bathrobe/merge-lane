// Templates for assembling assessment prose
// Slots use format: {axis_id:form} where form is 'main' or 'clause'
//
// Available axes:
//   legible_illegible, sovereign_symphonic, anthro_xeno,
//   mortal_immortalist, accel_steward, aligned_autonomous, apollonian_dionysian

export const ASSESSMENT_TEMPLATES = [
  // Template 1: Classic clinical
  `Subject {sovereign_symphonic:main}. {legible_illegible:clause}, they {anthro_xeno:main}. Subject {mortal_immortalist:main}. {accel_steward:clause}, they {aligned_autonomous:main}. Subject {apollonian_dionysian:main}.`,

  // Template 2: Flowing observations
  `Subject {legible_illegible:main}. They {sovereign_symphonic:main}, {anthro_xeno:clause}. Their orientation toward mortality: subject {mortal_immortalist:main}. {apollonian_dionysian:clause}, they {accel_steward:main}. Subject {aligned_autonomous:main}.`,

  // Template 3: Contrast structure
  `Subject {anthro_xeno:main}, while {sovereign_symphonic:clause}. They {legible_illegible:main}. Subject {accel_steward:main}, {mortal_immortalist:clause}. {aligned_autonomous:clause}, subject {apollonian_dionysian:main}.`,

  // Template 4: Nested observations
  `{sovereign_symphonic:clause}, subject {legible_illegible:main}. They {mortal_immortalist:main}. Subject {anthro_xeno:main}, {apollonian_dionysian:clause}. They {accel_steward:main}, {aligned_autonomous:clause}.`,
];

export function pickRandomTemplate(): string {
  return ASSESSMENT_TEMPLATES[Math.floor(Math.random() * ASSESSMENT_TEMPLATES.length)];
}
