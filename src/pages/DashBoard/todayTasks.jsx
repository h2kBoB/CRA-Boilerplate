// TodayTasks.jsx
import React, { useState, useEffect } from 'react';
import {
  TaskContainer,
  TaskTitle,
  TaskDescription,
  TaskInfoContainer,
  TaskInfo,
  TaskLabel,
  TaskCount,
  TaskSkeleton,
} from './styles';

// TODO: API 연동 시 제거해 주세요!
const dummyData = [
  { label: '신규 문의', count: '1건' },
  { label: '미처리 문의', count: '0건' },
  { label: '신규 신고', count: '2건' },
  { label: '미처리 신고', count: '0건' },
];

const TodayTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setLoading] = useState(true);

  // TODO: API 연동 시 제거해 주세요!
  // api 요청 시뮬레이터
  useEffect(() => {
    const fetchTasks = () => {
      setTimeout(() => {
        try {
          setTasks(dummyData);
          setLoading(false);
        } catch (err) {
          setLoading(false);
        }
      }, 2000); // 1초의 네트워크 지연 상정
    };

    fetchTasks();
  }, []);

  return (
    <TaskContainer>
      <TaskTitle>오늘의 할 일</TaskTitle>
      <TaskDescription>
        신규 문의/신고는 하루가 지나면 미처리 문의/신고로 표시됩니다.
      </TaskDescription>
      <TaskInfoContainer>
        {isLoading ? (
          <>
            <TaskSkeleton />
            <TaskSkeleton />
            <TaskSkeleton />
            <TaskSkeleton />
          </>
        ) : (
          tasks.map((task) => (
            <TaskInfo key={task.label}>
              <TaskLabel>{task.label}</TaskLabel>
              <TaskCount>{task.count}</TaskCount>
            </TaskInfo>
          ))
        )}
      </TaskInfoContainer>
    </TaskContainer>
  );
};

export default TodayTasks;
