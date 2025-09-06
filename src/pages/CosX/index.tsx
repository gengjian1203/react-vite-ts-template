import { CXButton, CXCard } from '@gengjian1203/fe-core-components';
import { Button } from 'antd';
import { memo } from 'react';

const CosX = memo(() => {
  return (
    <div className="flex flex-col">
      <div className="p-6 space-y-4">
        <Button>Antd按钮对照</Button>
      </div>
      <div className="p-6 space-y-4">
        <div className="space-x-2">
          <CXButton variant="primary">Primary</CXButton>
          <CXButton variant="secondary">Secondary</CXButton>
          <CXButton variant="outline">Outline</CXButton>
          <CXButton variant="ghost">Ghost</CXButton>
          <CXButton variant="danger">Danger</CXButton>
        </div>

        <CXCard
          title="项目概览"
          variant="shadow"
          status="success"
          tags={[
            { text: '进行中', color: 'blue' },
            { text: '优先级高', color: 'red', variant: 'outlined' },
          ]}
          metadata={[
            { label: '创建时间', value: '2024-01-01' },
            { label: '负责人', value: '张三' },
          ]}
          footer={
            <div className="flex justify-end space-x-2">
              <CXButton size="small" variant="ghost">
                取消
              </CXButton>
              <CXButton size="small" variant="primary">
                确认
              </CXButton>
            </div>
          }
          clickable
          onCardClick={() => {
            console.log('Card clicked!');
          }}
        >
          这是一个功能丰富的卡片组件，支持头像、标签、元数据等多种内容展示。
        </CXCard>
      </div>
    </div>
  );
});

export default CosX;
