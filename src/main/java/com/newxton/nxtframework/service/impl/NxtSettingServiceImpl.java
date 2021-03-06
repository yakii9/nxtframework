package com.newxton.nxtframework.service.impl;

import com.newxton.nxtframework.dao.NxtSettingDao;
import com.newxton.nxtframework.entity.NxtSetting;
import com.newxton.nxtframework.service.NxtSettingService;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * (NxtSetting)表服务实现类
 *
 * @author makejava
 * @since 2020-07-23 19:30:08
 */
@Service("nxtSettingService")
public class NxtSettingServiceImpl implements NxtSettingService {
    @Resource
    private NxtSettingDao nxtSettingDao;

    /**
     * 通过key查询单条数据
     *
     * @param settingKey 字符串唯一key
     * @return 实例对象
     */
    public NxtSetting queryBySettingKey(String settingKey){
        return this.nxtSettingDao.queryBySettingKey(settingKey);
    }

    /**
     * 查询指定多个类型数据
     * @return 对象列表
     */
    public List<NxtSetting> selectByKeySet(@Param("keyList") List<String> keyList){
        return this.nxtSettingDao.selectByKeySet(keyList);
    }

    /**
     * 通过ID查询单条数据
     *
     * @param id 主键
     * @return 实例对象
     */
    @Override
    public NxtSetting queryById(Long id) {
        return this.nxtSettingDao.queryById(id);
    }

    /**
     * 查询多条数据
     *
     * @param offset 查询起始位置
     * @param limit 查询条数
     * @return 对象列表
     */
    @Override
    public List<NxtSetting> queryAllByLimit(int offset, int limit) {
        return this.nxtSettingDao.queryAllByLimit(offset, limit);
    }

    /**
     * 通过实体作为筛选条件查询
     *
     * @return 对象列表
     */
    public List<NxtSetting> queryAll(NxtSetting setting) {
        return this.nxtSettingDao.queryAll(setting);
    }

    /**
     * 新增数据
     *
     * @param nxtSetting 实例对象
     * @return 实例对象
     */
    @Override
    public NxtSetting insert(NxtSetting nxtSetting) {
        this.nxtSettingDao.insert(nxtSetting);
        return nxtSetting;
    }

    /**
     * 修改数据
     *
     * @param nxtSetting 实例对象
     * @return 实例对象
     */
    @Override
    public NxtSetting update(NxtSetting nxtSetting) {
        this.nxtSettingDao.update(nxtSetting);
        return this.queryById(nxtSetting.getId());
    }

    /**
     * 通过主键删除数据
     *
     * @param id 主键
     * @return 是否成功
     */
    @Override
    public boolean deleteById(Long id) {
        return this.nxtSettingDao.deleteById(id) > 0;
    }
}