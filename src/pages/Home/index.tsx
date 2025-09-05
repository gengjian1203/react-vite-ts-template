import { memo } from 'react';

const Home = memo(() => {
  // const navigate = useNavigate();

  return (
    <div className="w-full bg-cosx-light">
      <div className="p-cosx-lg space-y-cosx-lg">
        <h1 className="text-cosx-4xl font-bold text-cosx-dark mb-cosx-xl">首页 - COSX Tailwind 样式系统</h1>

        {/* 间距示例 */}
        <section className="cosx-card-base">
          <h2 className="text-cosx-2xl font-semibold mb-cosx-base text-cosx-dark">1. 间距样式 (Spacing)</h2>
          <div className="space-y-cosx-sm">
            <div className="mt-cosx-xs bg-cosx-primary text-white p-cosx-xs rounded">mt-cosx-xs (4px)</div>
            <div className="mt-cosx-sm bg-cosx-primary text-white p-cosx-xs rounded">mt-cosx-sm (8px)</div>
            <div className="mt-cosx-base bg-cosx-primary text-white p-cosx-xs rounded">mt-cosx-base (16px)</div>
            <div className="mt-cosx-md bg-cosx-primary text-white p-cosx-xs rounded">mt-cosx-md (24px)</div>
            <div className="mt-cosx-lg bg-cosx-primary text-white p-cosx-xs rounded">mt-cosx-lg (32px)</div>
            <div className="mt-cosx-xl bg-cosx-primary text-white p-cosx-xs rounded">mt-cosx-xl (48px)</div>
          </div>
        </section>

        {/* 填充示例 */}
        <section className="cosx-card-base">
          <h2 className="text-cosx-2xl font-semibold mb-cosx-base text-cosx-dark">2. 填充样式 (Padding)</h2>
          <div className="grid grid-cols-2 gap-cosx-base">
            <div className="p-cosx-xs bg-cosx-secondary text-white rounded">p-cosx-xs</div>
            <div className="p-cosx-sm bg-cosx-secondary text-white rounded">p-cosx-sm</div>
            <div className="p-cosx-base bg-cosx-secondary text-white rounded">p-cosx-base</div>
            <div className="p-cosx-lg bg-cosx-secondary text-white rounded">p-cosx-lg</div>
          </div>
        </section>

        {/* 颜色示例 */}
        <section className="cosx-card-base">
          <h2 className="text-cosx-2xl font-semibold mb-cosx-base text-cosx-dark">3. 自定义颜色 (Colors)</h2>
          <div className="grid grid-cols-3 gap-cosx-sm">
            <div className="bg-cosx-primary text-white p-cosx-base rounded-cosx-base text-center">Primary</div>
            <div className="bg-cosx-secondary text-white p-cosx-base rounded-cosx-base text-center">Secondary</div>
            <div className="bg-cosx-accent text-white p-cosx-base rounded-cosx-base text-center">Accent</div>
            <div className="bg-cosx-danger text-white p-cosx-base rounded-cosx-base text-center">Danger</div>
            <div className="bg-cosx-success text-white p-cosx-base rounded-cosx-base text-center">Success</div>
            <div className="bg-cosx-info text-white p-cosx-base rounded-cosx-base text-center">Info</div>
          </div>
        </section>

        {/* 字体大小示例 */}
        <section className="cosx-card-base">
          <h2 className="text-cosx-2xl font-semibold mb-cosx-base text-cosx-dark">4. 字体大小 (Font Sizes)</h2>
          <div className="space-y-cosx-sm">
            <p className="text-cosx-xs text-cosx-muted">text-cosx-xs - 超小字体</p>
            <p className="text-cosx-sm text-cosx-muted">text-cosx-sm - 小字体</p>
            <p className="text-cosx-base text-cosx-dark">text-cosx-base - 基础字体</p>
            <p className="text-cosx-lg text-cosx-dark">text-cosx-lg - 大字体</p>
            <p className="text-cosx-xl text-cosx-dark">text-cosx-xl - 超大字体</p>
            <p className="text-cosx-2xl text-cosx-dark font-semibold">text-cosx-2xl - 2倍大字体</p>
            <p className="text-cosx-3xl text-cosx-dark font-bold">text-cosx-3xl - 3倍大字体</p>
          </div>
        </section>

        {/* 圆角示例 */}
        <section className="cosx-card-base">
          <h2 className="text-cosx-2xl font-semibold mb-cosx-base text-cosx-dark">5. 圆角样式 (Border Radius)</h2>
          <div className="grid grid-cols-3 gap-cosx-base">
            <div className="bg-cosx-accent text-white p-cosx-base rounded-cosx-sm text-center">rounded-cosx-sm</div>
            <div className="bg-cosx-accent text-white p-cosx-base rounded-cosx-base text-center">rounded-cosx-base</div>
            <div className="bg-cosx-accent text-white p-cosx-base rounded-cosx-lg text-center">rounded-cosx-lg</div>
            <div className="bg-cosx-accent text-white p-cosx-base rounded-cosx-xl text-center">rounded-cosx-xl</div>
            <div className="bg-cosx-accent text-white p-cosx-base rounded-cosx-2xl text-center">rounded-cosx-2xl</div>
          </div>
        </section>

        {/* 阴影示例 */}
        <section className="cosx-card-base">
          <h2 className="text-cosx-2xl font-semibold mb-cosx-base text-cosx-dark">6. 阴影样式 (Box Shadow)</h2>
          <div className="grid grid-cols-2 gap-cosx-base">
            <div className="bg-white p-cosx-base rounded-cosx-base shadow-cosx-sm">shadow-cosx-sm</div>
            <div className="bg-white p-cosx-base rounded-cosx-base shadow-cosx-base">shadow-cosx-base</div>
            <div className="bg-white p-cosx-base rounded-cosx-base shadow-cosx-lg">shadow-cosx-lg</div>
            <div className="bg-white p-cosx-base rounded-cosx-base shadow-cosx-xl">shadow-cosx-xl</div>
          </div>
        </section>

        {/* 尺寸示例 */}
        <section className="cosx-card-base">
          <h2 className="text-cosx-2xl font-semibold mb-cosx-base text-cosx-dark">7. 宽高尺寸 (Width & Height)</h2>
          <div className="space-y-cosx-base">
            <div className="w-cosx-xs h-cosx-xs bg-cosx-primary rounded flex items-center justify-center text-white text-cosx-sm">
              w-cosx-xs & h-cosx-xs
            </div>
            <div className="w-cosx-sm h-cosx-sm bg-cosx-secondary rounded flex items-center justify-center text-white">
              w-cosx-sm & h-cosx-sm
            </div>
            <div className="w-cosx-base h-cosx-base bg-cosx-accent rounded flex items-center justify-center text-white">
              w-cosx-base & h-cosx-base
            </div>
          </div>
        </section>

        {/* 组件样式示例 */}
        <section className="cosx-card-base">
          <h2 className="text-cosx-2xl font-semibold mb-cosx-base text-cosx-dark">
            8. 自定义组件样式 (Custom Components)
          </h2>
          <div className="space-y-cosx-base">
            <div className="space-x-cosx-base">
              <button type="button" className="cosx-btn-primary">
                Primary Button
              </button>
              <button type="button" className="cosx-btn-secondary">
                Secondary Button
              </button>
            </div>

            <div className="cosx-card-base max-w-md">
              <h3 className="text-cosx-lg font-semibold mb-cosx-sm">卡片组件</h3>
              <p className="text-cosx-muted">这是一个使用 cosx-card-base 样式的卡片组件示例。</p>
            </div>

            <div className="space-y-cosx-sm">
              <input type="text" placeholder="输入框示例" className="cosx-input-base w-full max-w-md" />
              <input type="email" placeholder="邮箱输入框" className="cosx-input-base w-full max-w-md" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
});

export default Home;
