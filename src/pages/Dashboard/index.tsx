import { memo } from 'react';
import { useNavigate } from 'react-router';

import Button from '@/components/Button';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { changeDashboardState } from '@/store/reducer/dashboard';
import { changeGlobalState, changeUid, selectUserName } from '@/store/reducer/global';
import { changeHomeState } from '@/store/reducer/home';

const Dashboard = memo(() => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  // Global state
  const userName = useAppSelector(selectUserName);
  const uid = useAppSelector((state) => state.global.uid);

  // Home state
  const homeCount = useAppSelector((state) => state.home.homeCount);

  // Dashboard state
  const dashboardCount = useAppSelector((state) => state.dashboard.boardCount);

  return (
    <div className="p-cosx-lg space-y-cosx-lg bg-cosx-light min-h-screen">
      <div className="cosx-card-base">
        <h1 className="text-cosx-3xl font-bold text-cosx-dark mb-cosx-lg">Dashboard 看板页</h1>

        {/* Global State Section */}
        <section className="mb-cosx-lg">
          <h2 className="text-cosx-xl font-semibold text-cosx-dark mb-cosx-base">Global State 全局状态</h2>
          <div className="space-y-cosx-sm mb-cosx-base">
            <div className="text-cosx-base">
              global userName: <span className="text-cosx-primary font-medium">{userName}</span>
            </div>
            <div className="text-cosx-base">
              global uid: <span className="text-cosx-primary font-medium">{uid}</span>
            </div>
          </div>
          <div className="space-x-cosx-sm">
            <button type="button" onClick={() => dispatch(changeUid('10011'))} className="cosx-btn-primary">
              点击设置全局UID的值
            </button>
            <button
              type="button"
              onClick={() => dispatch(changeGlobalState({ userName: '李四' }))}
              className="cosx-btn-secondary"
            >
              点击修改全局username的值
            </button>
          </div>
        </section>

        {/* Home State Section */}
        <section className="mb-cosx-lg">
          <h2 className="text-cosx-xl font-semibold text-cosx-dark mb-cosx-base">Home State 首页状态</h2>
          <div className="mb-cosx-base">
            <div className="text-cosx-base">
              home页面计数器：<span className="text-cosx-success font-medium">{homeCount}</span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => dispatch(changeHomeState({ homeCount: homeCount + 1 }))}
            className="cosx-btn-primary"
          >
            点击修改home页面的计数器
          </button>
        </section>

        {/* Dashboard State Section */}
        <section className="mb-cosx-lg">
          <h2 className="text-cosx-xl font-semibold text-cosx-dark mb-cosx-base">Dashboard State 看板状态</h2>
          <div className="mb-cosx-base">
            <div className="text-cosx-base">
              看板页面计数器：<span className="text-cosx-accent font-medium">{dashboardCount}</span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => dispatch(changeDashboardState({ boardCount: dashboardCount + 1 }))}
            className="cosx-btn-primary"
          >
            点击修改看板页面计数器
          </button>
        </section>

        {/* Navigation */}
        <section>
          <h2 className="text-cosx-xl font-semibold text-cosx-dark mb-cosx-base">Navigation 导航</h2>
          <Button
            text="返回首页"
            onClick={() => {
              navigate('/');
            }}
          />
        </section>
      </div>
    </div>
  );
});

export default Dashboard;
