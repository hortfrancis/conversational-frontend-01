// Static mocked data for first prototype
import { lessons } from '../data/lessons.js';

export default function getLessonData(id) {
    return lessons.find(lesson => lesson.id === id);
}
