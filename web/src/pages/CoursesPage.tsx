import { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import CourseDetail from '../components/CourseDetail';
import { courses, courseCategories } from '../data/courses';

export default function CoursesPage() {
  const [activeCategoryId, setActiveCategoryId] = useState('common'); // default
  const [activeCourseId, setActiveCourseId] = useState<string | null>(null);

  // Filter courses strictly inside the useMemo based on activeCategoryId
  const categoryCourses = useMemo(() => {
    return courses.filter(c => c.categoryId === activeCategoryId);
  }, [activeCategoryId]);

  // Use useEffect to reset activeCourseId when the category changes
  useEffect(() => {
    if (categoryCourses.length > 0) {
      setActiveCourseId(categoryCourses[0].id);
    } else {
      setActiveCourseId(null);
    }
  }, [categoryCourses]);

  const activeCategoryName = courseCategories.find(c => c.id === activeCategoryId)?.name;
  const activeCourse = courses.find(c => c.id === activeCourseId);

  return (
    <div className="subpage-wrapper">
      {/* Visual Header */}
      <div className="theme-bg">
        <div className="container">
          <h1 className="theme-title animate-fade-in">교육과정 안내</h1>
          <div className="theme-nav">
             <span>HOME</span> &gt; <span>교육과정 안내</span> &gt; <strong>{activeCategoryName}</strong>
          </div>
        </div>
      </div>

      <div className="container subpage-content-grid">
        {/* Horizontal Navigation Bar (LNB) */}
        <aside className="lnb">
          <h3>교육과정안내</h3>
          <ul>
            {courseCategories.map((cat) => (
              <li key={cat.id}>
                <button 
                  className={activeCategoryId === cat.id ? 'active' : ''}
                  onClick={() => setActiveCategoryId(cat.id)}
                >
                  {cat.name}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content Area */}
        <div className="subpage-main animate-fade-in">
          {activeCourse ? (
            <CourseDetail course={activeCourse} />
          ) : (
            <div className="card animate-fade-in center" style={{ padding: '80px 20px' }}>
               <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{activeCategoryName}</h2>
               <p style={{ color: 'var(--text-muted)' }}>초기 프로토타입 버전입니다. 해당 카테고리의 세부 과정 데이터는 추후 추가됩니다.</p>
               <button 
                 className="btn-primary mt-6" 
                 onClick={() => {
                   setActiveCategoryId('school');
                 }}
               >
                 샘플 과정(학교·교육) 보기
               </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
