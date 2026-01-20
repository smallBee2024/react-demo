"use client";
// 4. 页面组件
export default function DemoPage() {
  return (
    <div>
      <h1>原生context</h1>
      <div>
        React 的 Context API 是一种组件间共享数据的机制，它允许你在组件树中传递数据而不必手动逐层传递 props，特别适合&quot;全局&quot;数据的共享（如主题、用户认证信息等）。
      </div>
      
      <h1>性能注意事项</h1>
      <div>渲染优化问题：</div>
      <div>当 Provider 的 value 变化时，所有消费组件都会重新渲染</div>
      <div>即使组件只使用了 value 的一部分，也会触发更新</div>
      <div>优化方案：</div>
      <div>将不变的函数/值记忆化：</div>
      <div>
      {/* const value = useMemo(() => ({ user, login, logout }), [user]); */}
      拆分 Context（将频繁变化和不常变化的数据分开）</div>
      <div>对于复杂场景，考虑使用 use-context-selector</div>
      <div>适用场景</div>
      <div>主题切换 (theme)</div>
      <div>用户认证信息 (auth)</div>
      <div>多语言国际化 (i18n)</div>
      <div>全局配置</div>
      <div>避免多层 prop drilling</div>
      <div>不适用场景</div>
      <div>需要高性能、频繁更新的状态管理（考虑 Redux、Zustand 等）</div>
      <div>组件局部状态（应该使用 useState/useReducer）</div>
      <div>非常简单的父子组件通信（props 更合适）</div>
      将不变的函数/值记忆化：

      {/* const value = useMemo(() => ({ user, login, logout }), [user]); */}
      <div>拆分 Context（将频繁变化和不常变化的数据分开）</div>

      <div>对于复杂场景，考虑使用 use-context-selector</div>

      适用场景<br />
      主题切换 (theme)<br />

      用户认证信息 (auth)<br />

      多语言国际化 (i18n)<br />

      全局配置<br />

      避免多层 prop drilling<br />

      不适用场景<br />
      需要高性能、频繁更新的状态管理（考虑 Redux、Zustand 等）<br />

      组件局部状态（应该使用 useState/useReducer）<br />

      非常简单的父子组件通信（props 更合适）<br />
    </div>
  );
} 