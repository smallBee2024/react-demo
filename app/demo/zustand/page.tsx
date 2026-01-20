"use client";
import { create, StateCreator } from "zustand";

// 创建Zustand store
interface CounterState {
  count: number;
  message: string;
  setMessage: (message: string) => void;
  increase: () => void;
  decrease: () => void;
}

const useCounterStore = create<CounterState>(((set) => ({
  message: "Hello, Zustand!",
  setMessage: (message: string) => set({ message }),
  // 初始化状态
  count: 0,
  increase: () => set((state: CounterState) => ({ count: state.count + 1 })),
  decrease: () => set((state: CounterState) => ({ count: state.count - 1 })),
})) as StateCreator<CounterState>);


const DisplayCount = () => {
  console.log("DisplayCount render");
  // const { count, increase, decrease } = useCounterStore();
  const count = useCounterStore(state => state.count);
  const increase = useCounterStore(state => state.increase);
  const decrease = useCounterStore(state => state.decrease);
  return (
    <>
      <h1>Zustand 计数器 Demo</h1>
      <div style={{ fontSize: 24, margin: "16px 0" }}>计数：{count}</div>
      <button onClick={decrease} style={{ marginRight: 8 }}>
        - 减少
      </button>
      <button onClick={increase}>+ 增加</button>
      <p style={{ marginTop: 24 }}>
        这是一个使用 <b>Zustand</b> 状态管理的简单计数器示例。
      </p>
    </>
  )
}

const DisplayMessage = () => {
  console.log("DisplayMessage render");

  // const { message } = useCounterStore();
  const message = useCounterStore(state => state.message);
  const setMessage = useCounterStore(state => state.setMessage);
  return (
    <>
      <h1>Zustand 消息 Demo</h1>
      <div style={{ fontSize: 24, margin: "16px 0" }}>消息：{message}</div>
      <button onClick={() => setMessage("121212")}>设置消息</button>
    </>
  )
}

export default function ZustandDemo() {
  return (
    <div style={{ padding: 32 }}>
      <div style={{ marginTop: 24 }}>
        <DisplayCount />
      </div>
      <div style={{ marginTop: 24 }}>
        <DisplayMessage />
      </div>
    </div>
  );
} 